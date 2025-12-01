import React, { useState} from "react";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import RecipeFilter from "./RecipeFilter";
import Pagination from "./Pagination";
import Aide from "./Aide";

import Tajine_legume from "./Tajine_legume.png";
import Salade_cesar from "./Salade_cesar.png";
import Tiramisu_clasique from "./Tiramisu_classique.png";
import Smoothie_tropical from "./Smoothie_tropical.png";

const initialRecipes = [
    {
        id: 1,
        nom: 'Tajine aux légumes',
        categorie: 'Plat',
        ingredients: ['2 carottes', '3 pommes de terre', '1 courgette', '200g de pois chiches', 'Épices marocaines'],
        description: 'Un délicieux tajine végétarien aux saveurs marocaines traditionnelles, mijoté lentement avec des épices authentiques.',
        difficulte: 3,
        image: 'Tajine_legume.png'
    },
    {
        id: 2,
        nom: 'Salade César',
        categorie: 'Entrée',
        ingredients: ['Laitue romaine', 'Poulet grillé', 'Parmesan', 'Croûtons', 'Sauce César'],
        description: 'Une salade fraîche et croquante avec du poulet grillé, du parmesan râpé et une sauce César maison onctueuse.',
        difficulte: 2,
        image: 'Salade_cesar.png'
    },
    {
        id: 3,
        nom: 'Tiramisu classique',
        categorie: 'Dessert',
        ingredients: ['Mascarpone', 'Biscuits cuillères', 'Café expresso', 'Cacao', 'Œufs', 'Sucre'],
        description: 'Le dessert italien emblématique avec des couches de biscuits imbibés de café et une crème au mascarpone veloutée.',
        difficulte: 2,
        image: 'Tiramisu_classique.png'
    },
    {
        id: 4,
        nom: 'Smoothie tropical',
        categorie: 'Boisson',
        ingredients: ['Mangue', 'Ananas', 'Banane', 'Lait de coco', 'Glaçons'],
        description: 'Un smoothie rafraîchissant aux fruits tropicaux, parfait pour commencer la journée avec énergie et vitamines.',
        difficulte: 1,
        image: 'Smoothie_tropical.png'
    }
];

const recipesPerPage = 2;

function MainPage  ()  {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState(initialRecipes);
  const [showForm, setShowForm] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilter = (search, category) => {
    let filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
    if (category !== "Toutes") {
      filtered = filtered.filter((recipe) => recipe.category === category);
    }
    setFilteredRecipes(filtered);
    setCurrentPage(1);
  };

  const handleFormSubmit = (recipe) => {
    if (recipeToEdit) {
      setRecipes(recipes.map((r) => (r.id === recipe.id ? recipe : r)));
      setRecipeToEdit(null);
    } else {
      setRecipes([recipe, ...recipes]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  const handleDuplicate = (recipe) => {
    const newRecipe = { ...recipe, id: Date.now() };
    setRecipes([newRecipe, ...recipes]);
  };

  const handleEdit = (recipe) => {
    setRecipeToEdit(recipe);
    setShowForm(true);
  };

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const currentRecipes = filteredRecipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  useState(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Creative Recipe Builder</h1>

      <RecipeFilter onFilter={handleFilter} />

      <button
        onClick={() => {
          setRecipeToEdit(null);
          setShowForm(!showForm);
        }}
        style={styles.buttonAdd}
      >
        Créer une nouvelle recette
      </button>

      {showForm && (
        <RecipeForm
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
          recipeToEdit={recipeToEdit}
        />
      )}

      <RecipeList
        recipes={currentRecipes}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDuplicate={handleDuplicate}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <Aide />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "16px"
  },
  title: {
    textAlign: "center",
    marginBottom: "16px"
  },
  buttonAdd: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "16px"
  }
};

export default MainPage;

