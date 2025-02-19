/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';

export function RandomCocktail({ cocktail }) {
  return (
    <article className="random-cocktail">
      <figure className="image">
        <img src={cocktail.thumbnail} alt={cocktail.name} />
      </figure>
      <div className="content">
        <h2>{cocktail.name}</h2>
        <NavLink to={`/details/${cocktail.id}`}>
          <button className="btn details">View details</button>
        </NavLink>
      </div>
    </article>
  );
}
