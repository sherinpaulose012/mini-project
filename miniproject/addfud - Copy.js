import { db } from "./firebase.js";
import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

// Reference to Firestore menu collection
const menuCollection = collection(db, "menu");

// Function to add a food item
async function addFood() {
    const name = document.getElementById("foodName").value;
    const price = document.getElementById("foodPrice").value;

    if (name.trim() === "" || price.trim() === "") {
        alert("Please enter food name and price.");
        return;
    }

    try {
        await addDoc(menuCollection, {
            name: name,
            price: Number(price),
            available: true
        });

        document.getElementById("foodName").value = "";
        document.getElementById("foodPrice").value = "";
    } catch (error) {
        console.error("Error adding food:", error);
    }
}

// Function to remove a food item
async function removeFood(id) {
    try {
        await deleteDoc(doc(db, "menu", id));
    } catch (error) {
        console.error("Error removing food:", error);
    }
}

// Function to load and display the menu in real-time
function loadMenu() {
    onSnapshot(menuCollection, (snapshot) => {
        const menuList = document.getElementById("menuList");
        menuList.innerHTML = ""; // Clear previous data

        snapshot.docs.forEach((doc) => {
            const food = doc.data();
            const li = document.createElement("li");
            li.innerHTML = `${food.name} - ₹${food.price} 
                <button onclick="removeFood('${doc.id}')">Remove</button>`;
            menuList.appendChild(li);
        });
    });
}

// Attach event listener to add food button
document.getElementById("addFoodBtn").addEventListener("click", addFood);

// Load menu when the page loads
loadMenu();
