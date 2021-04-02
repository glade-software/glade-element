import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
    global:{
        colors:{
            brand: "#1A535C",
        }
    }
});

export default theme;
