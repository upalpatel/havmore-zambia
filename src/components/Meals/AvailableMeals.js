import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Tikka",
    description:
      "made from chunks of paneer marinated in spices and grilled in a tandoor",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Paneer Pasanda",
    description:
      "a rich recipe of shallow fried stuffed paneer sandwiches in a smooth, creamy tomato based gravy",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Tandoori Aloo",
    description: "Tandoori spiced roasted potatoes",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Tandoori Veg Platter",
    description:
      "a total buffet of vegetables in the most delectable way possible",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
