import './CategoryItem.css';
import {Link} from 'react-router-dom';

function CategoryItem(props) {
	const {strCategory, strCategoryThumb, strCategoryDescription} = props;

	return(
		<div className="card">
			<img src={strCategoryThumb} alt="" />
			<h2>{strCategory}</h2>
			<p>{strCategoryDescription.slice(0, 80)}...</p>

			<div className="card-active">
				<Link to={`/category/${strCategory}`}>Watch category</Link>
			</div>
		</div>
	)
}

export default CategoryItem;