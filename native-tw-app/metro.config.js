import { fileURLToPath } from "url";
import { dirname } from "path";

// Manually resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { getDefaultConfig } from "expo/metro-config";
import { withNativeWind } from "nativewind/metro";

const config = getDefaultConfig(__dirname);

export default withNativeWind(config, { input: "./global.css" });
