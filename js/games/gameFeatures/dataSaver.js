export default class DataSaver {
    saveData(gameNameInput, gameDataInput) {
        try {
            const data = {
                gameName: gameNameInput,
                gameData: this.serialize(gameDataInput)  // Use custom serializer
            };
            const jsonData = JSON.stringify(data);
            localStorage.setItem(gameNameInput, jsonData);
            return true;
        } catch (error) {
            console.error("Error saving data:", error);
            return false;
        }
    }

    loadData(gameName) {
        try {
            const jsonData = localStorage.getItem(gameName);
            if (jsonData) {
                const data = JSON.parse(jsonData);
                return this.deserialize(data.gameData);  // Use custom deserializer
            }
            return null;
        } catch (error) {
            console.error("Error loading data:", error);
            return null;
        }
    }

    // Custom serializer for Maps
    serialize(obj) {
        if (obj instanceof Map) {
            return {
                __type: 'Map',
                value: Array.from(obj.entries())  // Convert Map to array of entries
            };
        }
        return obj;
    }

    // Custom deserializer that reconstructs Maps
    deserialize(obj) {
        if (obj && obj.__type === 'Map') {
            return new Map(obj.value);  // Reconstruct Map from entries
        }
        return obj;
    }

    // Helper method to check if data exists
    hasData(gameName) {
        return localStorage.getItem(gameName) !== null;
    }

    // Helper method to clear data
    clearData(gameName) {
        localStorage.removeItem(gameName);
    }
}