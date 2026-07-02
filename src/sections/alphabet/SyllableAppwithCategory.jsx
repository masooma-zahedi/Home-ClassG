// برای استفاده این طوری استفاده شود: <SyllableAppwithCategory category="س"/>
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Form,
  Collapse,
  Card,
  Modal,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";

import { database, ref, set, onValue, remove, push } from "../firebase";

const SyllableAppwithCategory = ({ category: initialCategory = null }) => {
  const inputRef = useRef(null);

  const [words, setWords] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [listVisible, setListVisible] = useState(true);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [currentSyllable, setCurrentSyllable] = useState(0);

  // Add form
  const [newWord, setNewWord] = useState("");
  const [newSyllables, setNewSyllables] = useState("");
  const [newCategory, setNewCategory] = useState("");

  // Edit modal
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editWord, setEditWord] = useState("");
  const [editSyllables, setEditSyllables] = useState("");
  const [editCategory, setEditCategory] = useState("");

  // ✅ Firebase read (safe)
  useEffect(() => {
    const wordsRef = ref(database, "syllableWords");

    onValue(wordsRef, (snapshot) => {
      const data = snapshot.val() || {};

      const firebaseWords = Object.entries(data).map(([key, value]) => ({
        id: key,
        word: value?.word || "",
        category: value?.category || "",
        syllables: Array.isArray(value?.syllables)
          ? value.syllables
          : [],
      }));

      setWords(firebaseWords);
    });
  }, []);

  // set category from props
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setListVisible(false);
    }
  }, [initialCategory]);

  // focus on slider
  useEffect(() => {
    inputRef.current?.focus();
  }, [selectedWord]);

  // grouped words (SAFE)
  const groupedWords = words.reduce((acc, item) => {
    if (!item.category) return acc;
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // ADD
  const handleAddWord = (e) => {
    e.preventDefault();

    if (!newWord || !newSyllables || !newCategory) return;

    const newItem = {
      word: newWord,
      syllables: newSyllables.split("-").map(s => s.trim()),
      category: newCategory,
    };

    const newRef = push(ref(database, "syllableWords"));
    set(newRef, newItem);

    setNewWord("");
    setNewSyllables("");
    setNewCategory("");
    setSelectedCategory(newCategory);
  };

  // DELETE WORD
  const handleDeleteWord = (id) => {
    remove(ref(database, `syllableWords/${id}`));
  };

  // DELETE CATEGORY
  const handleDeleteCategory = async (cat) => {
    if (!window.confirm(`حذف کل دسته ${cat}?`)) return;

    const wordsRef = ref(database, "syllableWords");

    onValue(
      wordsRef,
      async (snapshot) => {
        const data = snapshot.val() || {};

        for (const [id, item] of Object.entries(data)) {
          if (item.category === cat) {
            await remove(ref(database, `syllableWords/${id}`));
          }
        }
      },
      { onlyOnce: true }
    );
  };

  // EDIT
  const openEditModal = (id) => {
    const w = words.find((x) => x.id === id);
    if (!w) return;

    setEditId(id);
    setEditWord(w.word);
    setEditSyllables(w.syllables.join("-"));
    setEditCategory(w.category);
    setEditModal(true);
  };

  const handleEditSave = () => {
    set(ref(database, `syllableWords/${editId}`), {
      word: editWord,
      syllables: editSyllables.split("-").map(s => s.trim()),
      category: editCategory,
    });

    setEditModal(false);
  };

  // SAFE render syllables
  const renderSyllables = (syllables, current) => (
    <div>
      {(syllables || []).map((s, i) => (
        <span
          key={i}
          style={{
            color: i === current ? "#d32f2f" : "#444",
            fontWeight: i === current ? "bold" : "normal",
            fontSize: "36px",
            marginLeft: 3,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );

  return (
    <section className="container mt-4" style={{ direction: "rtl" }}>
      <h2 className="header-section bg-info text-center p-3 rounded">کلمات زیر را با هم بخوانیم</h2>


      <Row>

        {/* WORDS */}
        <Col md={initialCategory ? 12 : 8}>
          {selectedCategory && (
            <Card className="mb-3">
              <Card.Header>کلمات {selectedCategory}</Card.Header>
              <Card.Body className="d-flex flex-wrap gap-2">
                {(groupedWords[selectedCategory] || []).map((w) => (
                  <div key={w.id} className="p-0 border rounded">
                    <Button className=" btn border text-dark fs-5 bg-white "
                      // variant="link"
                      onClick={() => {
                        setSelectedWord(w);
                        setCurrentSyllable(0);
                      }}
                    >
                      {w.word}
                    </Button>

                  </div>
                ))}
              </Card.Body>
            </Card>
          )}

          {/* SYLLABLE VIEW */}
          {selectedWord && (
            <Card>
              <Card.Body className="text-center">
                <h5 className="text-secondary" style={{opacity: "0.5"}}>نمایش کلمه : {selectedWord.word}</h5>

                {renderSyllables(
                  selectedWord.syllables,
                  currentSyllable
                )}

                <input
                  ref={inputRef}
                  type="range"
                  min="0"
                  max={selectedWord.syllables.length - 1}
                  value={currentSyllable}
                  onChange={(e) =>
                    setCurrentSyllable(Number(e.target.value))
                  }
                  className="w-100"
                />

                <div className="bg-info mt-3 p-3 rounded h3" style={{color:" #f36726"}}>
                  {selectedWord.syllables[currentSyllable]}
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

    </section>
  );
};

export default SyllableAppwithCategory;