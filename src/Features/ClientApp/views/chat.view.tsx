import { Fragment, useEffect, useState } from 'react';
import { Message } from 'features/core';
import { Rosie } from 'rosie-ui';

export function ChatView() {
  const [sessionId] = useState(Rosie.guid()),
        [question, setQuestion] = useState(''),
        [conversation, setConversation] = useState<Message[]>([]);

  useEffect(() => {
    const chatHistory = document.getElementById('chat-history');
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }, [conversation])

  function send() {
    if (!question.trim()) return;

    const content = question.trim().replace(/(\r\n|\n|\r)/gm,'');
    if (!content) return;

    const message: Message = { type: 'user', content, sessionId };
    updateConversation(message);
    setQuestion('');
  }

  function updateConversation(message: Message) {
    conversation.push(message);
    setConversation([...conversation]);
  }

  function handleChatInputKeyUp(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      document.getElementById('send-question').click();
    }
  }

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Features</li>
      <li className="breadcrumb-item active">Chat</li>
    </ol>
    <main className="fullscreen d-flex flex-column">
      <div id="chat-history" className="fullscreen d-flex flex-column chat-body overflow-y-auto p-2">
        {conversation.map((message, index) => {
          if (!message.content) return null;
          return <Fragment key={index}>
            <div className={`d-flex ${message.type} mb-2`}>
              <div className="card">
                <div className="card-body p-2">{message.content}</div>
              </div>
            </div>
          </Fragment>
        })}
      </div>
      <div className="chat-footer p-2">
        <div className="d-flex">
          <textarea className="form-control" rows={3} placeholder="Shift + Enter for a new line"
              value={question} onChange={e => setQuestion(e.target.value)} onKeyUp={handleChatInputKeyUp} />
          <button id="send-question" className="btn btn-primary"
              disabled={question.trim().replace(/(\r\n|\n|\r)/gm,'') === ''} onClick={send}>Send</button>
        </div>
      </div>
    </main>
  </>
}