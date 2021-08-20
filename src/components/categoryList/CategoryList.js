import CategoryItem from "./categoryItem/CategoryItem";
import "./CategoryList.css";

function CategoryList({catalog = []}) {
	return(
		<div className="list">
			{
				catalog.map(elem => (
					<CategoryItem key={elem.idCategory} {...elem}/>
				))
			}
		</div>
	)
}

export default CategoryList;