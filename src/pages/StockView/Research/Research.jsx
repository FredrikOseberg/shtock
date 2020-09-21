import React, { useState } from "react";

import ResearchCard from "../../../components/ResearchCard/ResearchCard";

import styles from "./Research.module.css";

const Research = ({ research, setResearch }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const renderResearchCards = () => {
    return research.map((researchObject) => {
      return (
        <ResearchCard
          title={researchObject.title}
          description={researchObject.description}
          link={researchObject.link}
          author={researchObject.author}
          key={researchObject.id}
        />
      );
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newResearch = {
      title,
      link,
      description,
      id: 100,
      author: {
        name: "Jake",
      },
    };

    setResearch(newResearch);
  };

  return (
    <div className={styles.research}>
      <div className={styles.cardContainer}>{renderResearchCards()}</div>

      <div className={styles.formContainer}>
        <div className={styles.formInnerContainer}>
          <div className={styles.form}>
            <h1 className={styles.header}>Add research</h1>
            <form onSubmit={onSubmit}>
              <div className={styles.inputContainer}>
                <label className={styles.formLabel}>
                  Title
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    className={styles.input}
                    name="title"
                  />
                </label>
                <label className={styles.formLabel}>
                  Link
                  <input
                    value={link}
                    onChange={(e) => setLink(e.currentTarget.value)}
                    className={styles.input}
                    name="source"
                  />
                </label>
              </div>
              <div className={styles.textAreaContainer}>
                <label className={styles.formLabel}>
                  Description
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    className={styles.textarea}
                    name="description"
                  ></textarea>
                </label>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.addResearchButton}>
                  Add research
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
