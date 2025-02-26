import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mapRawCocktailData } from '../utilities';

export function CocktailDetailsView() {
  const [cocktailDetails, setCocktailDetails] = useState(null);

  // This hooks takes all the path variables it can find in the URL and parses that to an object that we can use inside this component.
  const { id } = useParams(); // Will give as an objerct; {id: number}

  const fetchCocktailDetailsAsync = async (id) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const rawData = await response.json();
    const data = mapRawCocktailData(rawData.drinks.at(0));
    return data;
  };

  // Adding id in the dependency array makes sure that the useEffect runs again IF the id changes.
  useEffect(() => {
    fetchCocktailDetailsAsync(id).then((data) => setCocktailDetails(data));
  }, [id]);

  if (cocktailDetails === null) {
    return (
      <main className="cocktail-details-view">
        <div className="loader">Loading...</div>
      </main>
    );
  }

  return (
    <main className="cocktail-details-view">
      <h1>{cocktailDetails.name}</h1>
      <figure className="image">
        <img src={cocktailDetails.thumbnail} alt={cocktailDetails.name} />
      </figure>
      <div className="ingredients">
        {cocktailDetails.ingredients.map((ingredient) => (
          <div className="ingredient" key={ingredient.ingredient}>
            <span>{ingredient.ingredient}</span>
            <span>-</span>
            <span>{ingredient.measure}</span>
          </div>
        ))}
      </div>
      <p className="instructions">{cocktailDetails.instructions}</p>
    </main>
  );
}
