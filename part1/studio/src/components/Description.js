import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return (
        <div>
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
}

let RecipeAuthor = () => {
    let authorLink = "https://www.allrecipes.com/cook/3434";
    let authorPhoto = "data:image/jpeg;base64,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"
    let authorName = "Shelley Albeluhn";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
};

export default RecipeDescription;;
