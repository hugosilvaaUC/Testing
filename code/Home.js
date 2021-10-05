import dadad from "@usercentrics/cmp-browser-sdk";
const UC = new UC_SDK.default("ZVQN5qwpc");

UC.init().then((initialUIValues) => {
  // getSettings() returns all Usercentrics settings you need for your custom solution
  const settings = UC.getSettings();
  // getCategories() returns all categories' and data processing services' information
  const categories = UC.getCategories();

  console.log("Settings -> " + settings);
  console.log("Settings -> " + JSON.stringify(settings));

  console.log("Categories -> " + categories);
  console.log("Categories -> " + JSON.stringify(categories));

  if (initialUIValues.variant === UI_VARIANT.DEFAULT) {
    switch (initialUIValues.initialLayer) {
      case UI_LAYER.FIRST_LAYER:
        // Show first layer (i.e. privacy banner)
        console.log("teste");
        return;
      case UI_LAYER.PRIVACY_BUTTON:
        // Show privacy button
        console.log(":DDD");
        return;
      case UI_LAYER.NONE:
      default:
        console.log("Teste");
        // Show nothing
        return;
    }
  }
});
