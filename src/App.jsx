import React, { useState, useEffect } from "react";
import moment from "moment";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

const BIRTHDAY = moment("2025-04-27T00:00:00");
const SECRET_CODE = "kency2002";

export default function App() {
  const [now, setNow] = useState(moment());
  const [code, setCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [showMemories, setShowMemories] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [memories] = useState([
    "These are the memories I liked the most in our bond..Enjoy reading !",
    "The first time you laughed hard on a call I knew that sound would stay with me.",
    "You in traditional wear? Easily my favorite version of beauty.",
    "Let uncle take care of you for now, soon I will be the one ;)",
    "The way you shared your past with such strength… I saw a strong girl, not a wounded girl.",
    "That night when we didnt sleep, and  talked till late for 3hrs 46mins … felt like home.",
    "when you told about the bond with your uncle. i felt a small little girl who enjoys spending time with her second father",
    "You  said ‘I make myself lonely’ I respect that cuz i dont know the full story but humans are not meant to be alone :) .",
    "I waited 36 hours once, just to hear from you  and it was always worth it.",
    "You once said ‘a good soulful male friend is a blessing’ and that meant more to me than you think.",
    "Even when you were busy, you still replied. That effort didn’t go unnoticed.",
    "You liked my poetry  but you inspired most of it.",
    "You gave me clarity even when you were unsure and I respect that honesty.",
    "I thought I knew what connection meant… until I met you.",
    "Your voice when you talk about your dreams? It’s cute.",
    "You once said ‘I hate reptiles’ I almost reconsidered owning an snake in future.",
    "The call where you opened up about your family? I felt trusted.",
    "Even your 'mmm' texts made me feel seen.",
    "You once told me, 'Love takes time.' I’ve never been more willing to wait.",
    "while talking to you I feel complete! I unlocked the parts which I dont even  know I had",
    "You cared enough to explain things even when I overthought. That’s rare.",
    "You never made me feel like a disturbance even when I texted too much.",
    "I still remember when I first felt peace after hearing your voice.",
    "You once gave me headache cuz I mentioned hope by just being real with me.",
    "You’ve been my favorite chapter even if I didn’t know how the story would go.",
    "The way you called me back and introduced me to your friends I felt included in your world.",
    "Even when you were tired or had tests, you still talked to me for hours. That effort speaks louder than words.",
    "You once said you don’t trust easily  but every conversation feels like I’ve earned a little more of it.",
    "When you said ‘I don’t believe in love’… I smiled, because I believe in us enough for both.",
    "You remembered my birthday because it was the day I proposed you made it unforgettable without trying.",
    "You said you'd fix the girl I love .... even knowing, you are her.",
    'I remember our late night talk where we where mimicing each others words and in sleepy tone',
    'actually you asked me once -  why you like me? I told  reasons which came in mind that time,truth to be told! i dont know why but I loves you so much than I know!'
  ]);
  

  useEffect(() => {
    const interval = setInterval(() => setNow(moment()), 1000);
    return () => clearInterval(interval);
  }, []);

 

  const handleCodeSubmit = () => {
    if (code === SECRET_CODE) {
      setIsUnlocked(true);
      setShowMusic(true);
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  const nextMemory = () => {
    setCurrentMemory((prev) => (prev + 1) % memories.length);
  };

  const prevMemory = () => {
    setCurrentMemory((prev) => (prev - 1 + memories.length) % memories.length);
  };

  if (now.isBefore(BIRTHDAY)) {
    const duration = moment.duration(BIRTHDAY.diff(now));
    return (
      <div className="container">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          A Surprise Awaits...
        </motion.h1>
        <p>Unlocks in:</p>
        <motion.div
          className="countdown"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {duration.days()}d {duration.hours()}h {duration.minutes()}m {duration.seconds()}s
        </motion.div>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="container">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Enter Your Secret Code 🎁
        </motion.h1>
        <input
          type="password"
          maxLength={4}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="code-input"
        />
        <button onClick={handleCodeSubmit} className="unlock-btn">
          Unlock
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }

  return (
    <motion.div className="birthday-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>🎉 Happy Birthday LuckyCharm 🎉</h1>
      <div className="photo-gallery">
        <img src="/assets/photo1.jpeg" alt="Memory 1" className="gallery-pic" />
        <img src="/assets/photo2.jpeg" alt="Memory 2" className="gallery-pic" />
        <img src="/assets/photo3.jpeg" alt="Memory 3" className="gallery-pic" />
      </div>
      <p className="message">
        This space was made just for you — to remind you how special you are. I hope today brings
        you joy, laughter, and memories that last forever.
      </p>
      <motion.div className="letter" whileHover={{ scale: 1.02 }}>
        <p>
          I don’t know what the future holds, but today, I just want to celebrate your light. You’ve
          been an inspiration in ways words can’t fully capture.  I’ll always treasure the warmth you've unknowingly given.
        </p>
      </motion.div>

      <motion.div className="poem" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <h2>To the Girl who stays on my Mind ✨</h2>
        <p>
        Another year, another light,<br/>
You shine in ways both soft and bright.<br/>
Not just in smiles or dreams you chase,<br/>
But in the calm your presence brings in place.<br/>
<br/>
This day is yours, but truth be told —<br/>
You’ve been a gift to me, pure gold.<br/>
So here’s to you, with heart sincere,<br/>
Happy birthday, my reason, my cheer.<br/><br/>
        </p>
      </motion.div>

      <motion.button
        className="jar-button"
        onClick={() => setShowMemories(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🎁 Click to Open Memory Jar
      </motion.button>

      <AnimatePresence>
        {showMemories && (
          <motion.div
            className="modal-overlay"
            onClick={() => setShowMemories(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Memory Jar</h2>
              <motion.div className="memory-text" key={currentMemory} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p>{memories[currentMemory]}</p>
              </motion.div>
              <div className="memory-controls">
                <button onClick={prevMemory}>⬅️</button>
                <button onClick={nextMemory}>➡️</button>
              </div>
              <h6 className="pageno">{currentMemory+1}/{(memories.length+1)}</h6>
              <button className="close-modal" onClick={() => setShowMemories(false)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

     

      <p className="signature">With warmth, 💛</p>
    </motion.div>
  );
}
