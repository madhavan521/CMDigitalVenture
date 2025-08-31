import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    const newMessages = [...messages, { text: prompt, sender: "user" }];
    setMessages(newMessages);
    setPrompt("");

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyCcUykCqVzRZ3Xw0cW59bLbks9DnAbk3F8");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const context = `
        You are CM Digital Venture AI Assistant. 
        CM Digital Venture is a digital marketing agency that offers:
        - Meta Ads & Google Ads campaign management
        - Website & Portfolio development
        - AI-powered chatbots
        - Poster & content/script design
        - 100+ Instagram page campaigns
        - Social media growth & branding
        - Event promotions & political campaigns
        - Client success stories: Wolf Trading Academy, Makkal Nethi Maiyam, MS Events.

        Always answer in a professional, friendly tone. 
        If asked about services, pricing, or company, give clear details.
        If unrelated to CM Digital Venture, politely say: "I specialize in CM Digital Venture-related queries."
      `;

      const result = await model.generateContent([context, prompt]);
      const responseText = result?.response?.text() || "I couldn't understand that.";

      setMessages([...newMessages, { text: responseText, sender: "bot" }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: "Error: " + error.message, sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          className="chat-toggle-btn"
          onClick={() => setIsOpen(true)}
        >
          <BiMessageDetail size={24} />
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="chat-popup">
          {/* Header with close button */}
          <div className="chat-header">
            <h5 className="mb-0">CM Digital Venture AI Bot</h5>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-body" ref={chatContainerRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`d-flex mb-3 ${
                  msg.sender === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  className="chat-bubble"
                  style={{
                    background: msg.sender === "user" ? "#ff7b54" : "#99AAB5",
                    borderRadius:
                      msg.sender === "user"
                        ? "15px 15px 0 15px"
                        : "15px 15px 15px 0",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Input */}
          <div className="chat-footer">
            <input
              type="text"
              className="form-control"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
            />
            <button
              className="btn btn-gradients ms-2"
              onClick={handleSend}
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                <FaPaperPlane />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
          .chat-toggle-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff7b54, #ff4f81);
            border: none;
            border-radius: 50%;
            width: 55px;
            height: 55px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          }
          .chat-popup {
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 400px;
            max-height: 550px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            z-index: 9999;
          }
          .chat-header {
            background: linear-gradient(135deg, #ff7b54, #ff4f81);
            color: white;
            padding: 12px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
          }
          .chat-body {
            flex: 1;
            padding: 10px;
            overflow-y: auto;
          }
          .chat-footer {
            display: flex;
            padding: 10px;
            border-top: 1px solid #eee;
          }
          .chat-bubble {
            padding: 8px 12px;
            color: white;
            max-width: 75%;
            word-wrap: break-word;
          }
          .btn-gradients {
            background: linear-gradient(135deg, #ff7b54, #ff4f81);
            border: none;
            color: #fff;
            font-weight: 600;
            border-radius: 50px;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default ChatBot;
