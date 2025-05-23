import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api/files": "https://filesharebe.onrender.com",
			// "/api/files": "http://localhost:5600",
		},
	},
});
