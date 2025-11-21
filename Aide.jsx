function Aide () {
    return (
        <div>
            <h3 style={{color: '#667eea', marginBottom:'20px'}}>📖Guide de utilisation</h3>
            <ul style={{lineHeight:'2', color:'#495057'}}>
                <li><strong>Creer une recette: </strong>Cliquez sur "Creer une nouvelle recette" et remplissez le formulaire</li>
                <li><strong>Modifier:</strong> Cliquez sur le bouton "Modifier" sur une carte de recette</li>
                <li><strong>Dupliquer:</strong> Cliquez sur "Dupliquer" pour créer une copie d'une recette</li>
                <li><strong>Supprimer:</strong> Cliquez sur "Supprimer" pour retirer une recette</li>
                <li><strong>Filtrer:</strong> Utilisez la barre de recherche ou le filtre de catégorie</li>
                <li><strong>Ingrédients:</strong> Ajoutez ou supprimez des ingrédients dynamiquement dans le formulaire</li>
            </ul>
        </div>
    );
};
export default Aide;