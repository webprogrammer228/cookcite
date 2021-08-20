import { useParams, useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getFilterCategory} from '../../api';
import Preloader from '../../components/preloader/Preloader';
import MealList from '../../components/MealList';
import './Category.css';

function Category() {
	const {name} = useParams();
	const [meals, setMeals] = useState([]);
	const {goBack} = useHistory();

	useEffect(() => {
		getFilterCategory(name).then(data => setMeals(data.meals));
	}, [name])

	return(
		<div className="wrap">
			{
				!meals.length	 ? <Preloader /> : <MealList meals={meals}/>
			}
			<button className="btn" onClick={goBack}>Go Back</button>
		</div>
	)
}

export default Category;