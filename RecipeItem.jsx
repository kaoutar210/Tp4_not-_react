import React from "react";

function RecipeItem  ({ recipe, onEdit, onDuplicate, onDelete })  {
  return (
    <div style={styles.card}>
      <img src={recipe.image} alt={recipe.name} style={styles.image} />
      <h2>{recipe.name}</h2>
      <p><strong>Catégorie :</strong> {recipe.category}</p>
      <p><strong>Ingrédients :</strong> {recipe.ingredients}</p>
      <p><strong>Difficulté :</strong> {recipe.difficulty}</p>
      <p><strong>Description :</strong> {recipe.description}</p>

      <div style={styles.buttonContainer}>
        <button onClick={() => onEdit(recipe)} style={styles.buttonEdit}>✏Modifier</button>
        <button onClick={() => onDuplicate(recipe)} style={styles.buttonDuplicate}>📋Dupliquer</button>
        <button onClick={() => onDelete(recipe.id)} style={styles.buttonDelete}>🗑Supprimer</button>
      </div>
    </div>
  );
};

const styles = {
    card: { 
        border: "1px solid #ddd", 
        borderRadius: "8px", 
        padding: "16px", 
        margin: "16px", 
        maxWidth: "300px", 
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)" 
    },
    image: { 
        width: "100%", 
        height: "200px", 
        objectFit: "cover", 
        borderRadius: "8px" 
    },
    buttonContainer: { 
        marginTop: "12px", 
        display: "flex", 
        justifyContent: "space-between" 
    },
    buttonEdit: { 
        backgroundColor: "#4CAF50", 
        color: "white", 
        padding: "8px", 
        border: "none", 
        borderRadius: "4px", 
        cursor: "pointer" 
    },
    buttonDuplicate: { 
        backgroundColor: "#2196F3", 
        color: "white", 
        padding: "8px", 
        border: "none", 
        borderRadius: "4px", 
        cursor: "pointer" },
    buttonDelete: { 
        backgroundColor: "#f44336", 
        color: "white", 
        padding: "8px", 
        border: "none", 
        borderRadius: "4px", 
        cursor: "pointer" },
};

export default RecipeItem;
