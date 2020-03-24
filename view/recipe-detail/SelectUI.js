import RecipeUtils from "../../model/RecipeUtilities.js";

class SelectUI extends React.Component {
  constructor(props) {
    super(props);
    const reduceFunction = (accum, recipe) => R.assoc(RecipeUtils.toString(recipe), recipe, accum);
    const recipeMap = R.reduce(reduceFunction, {}, props.recipes);
    this.state = { recipeMap, value: "Acid" };

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction(event) {
    const key = event.target.value;
    this.setState({ value: key });

    const { onChange } = this.props;
    const { recipeMap } = this.state;
    const recipe = recipeMap[key];
    onChange(recipe);
  }

  render() {
    const { recipes } = this.props;
    const mapFunction = r => {
      const key = RecipeUtils.toString(r);
      return ReactDOMFactories.option({ key, value: key }, r.name);
    };
    const options = R.map(mapFunction, recipes);
    const { value } = this.state;
    const onChange = this.handleChange;

    return ReactDOMFactories.select({ key: "selectUI", value, onChange }, options);
  }
}

SelectUI.propTypes = {
  onChange: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default SelectUI;
