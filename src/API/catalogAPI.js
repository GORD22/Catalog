import {instance} from "./api";

export const catalogAPI = {
    getCatalogElements() {
        return instance.get("catalog.json")
            .then(response => response.data)
    }
}