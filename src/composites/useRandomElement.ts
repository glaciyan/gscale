import sample from "~/lib/sample";

const elements = ["anemo", "pyro", "electro", "geo", "cryo", "hydro"];

export default function () {
  const element = ref("cryo");

  const pickNew = () => {
    element.value = sample(elements) ?? "cryo";
  };

  return {
    element,
    pickNew,
  };
}
