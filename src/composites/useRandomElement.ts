import _ from "lodash";

const elements = ["anemo", "pyro", "electro", "geo", "cryo", "hydro"];

export default function () {
  const element = ref("cryo");

  const pickNew = () => {
    element.value = _.sample(elements) ?? "cryo";
  };

  return {
    element,
    pickNew,
  };
}
