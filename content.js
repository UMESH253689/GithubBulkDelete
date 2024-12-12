// Function to add checkboxes and action buttons
function addCheckboxes() {
    const chatItems = document.querySelectorAll('[data-testid^="history-item-"]');

    if (!chatItems.length) {
        console.error('No chat items found.');
        return;
    }

    chatItems.forEach((chatItem) => {
        const groupElement = chatItem.querySelector('.relative'); // Adjusted selector

        if (groupElement && !chatItem.querySelector('input.chat-checkbox')) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'chat-checkbox';
            checkbox.id = `checkbox-${chatItem.dataset.testid}`;
            groupElement.prepend(checkbox); // Prepend checkbox
        }
    });

    // Add toolbar if not already present
    if (!document.querySelector('#chat-manager-toolbar')) {
        const toolbar = document.createElement('div');
        toolbar.id = 'chat-manager-toolbar';
        toolbar.style = 'margin: 10px; display: flex; gap: 10px;';

        const selectAllButton = document.createElement('button');
        selectAllButton.id = 'select-all-btn';
        selectAllButton.textContent = 'Select All';
        selectAllButton.onclick = selectAllChats;

        const deleteSelectedButton = document.createElement('button');
        deleteSelectedButton.id = 'delete-selected-btn';
        deleteSelectedButton.textContent = 'Delete Selected';
        deleteSelectedButton.onclick = deleteSelectedChats;

        toolbar.appendChild(selectAllButton);
        toolbar.appendChild(deleteSelectedButton);
        document.body.prepend(toolbar);
    }
}

// Function to select/deselect all chats
function selectAllChats() {
    const checkboxes = document.querySelectorAll('.chat-checkbox');
    const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
    checkboxes.forEach((checkbox) => (checkbox.checked = !allChecked));
}


async function deleteSelectedChats() {
    const selectedChats = [];

    // Collect selected chats based on checked checkboxes
    document.querySelectorAll('.chat-checkbox:checked').forEach((checkbox, index) => {
        const chatItem = checkbox.closest('[data-testid^="history-item-"]');

        // Ensure chatId is correctly retrieved
        const chatId = chatItem ? chatItem.getAttribute('data-id') : null;

        // Log the chat ID when it is selected
        console.log(`Chat selected with ID: ${chatId}`);

        if (chatId) {
            selectedChats.push({ chatId, chatItem });
        }
    });

    // Debugging: Check what selected chats are being identified
    console.log('Selected chats:', selectedChats);

    if (selectedChats.length > 0) {
        try {
            // Loop through selected chats and delete each chat by ID
            for (const { chatId, chatItem } of selectedChats) {
                // Log the chat ID before attempting to delete
                console.log(`Attempting to delete chat with ID: ${chatId}`);

                // Send the chatId to the delete function to remove the chat
                deleteChatById(chatId, chatItem);
            }

            alert('Selected chats deleted successfully.');

        } catch (error) {
            console.error('Error deleting chats:', error);
            alert('Failed to delete selected chats.');
        }
    } else {
        alert('No chats selected.');
    }
}

// Function to delete chat by ID
function deleteChatById(chatId, chatItem) {
    // Locate the delete button within the chat item based on chatId
    const deleteButton = chatItem.querySelector('.delete-button');

    // If the delete button is found, trigger a click event to delete the chat
    if (deleteButton) {
        console.log(`Deleting chat with ID: ${chatId}`);
        deleteButton.click();
    } else {
        console.error(`Delete button not found for chat ${chatId}`);
    }

    // Optionally, remove the chat elements from the DOM after deletion
    chatItem.remove(); // Remove the chat item from the DOM
}

// Ensure the script runs after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        addCheckboxes();
    } catch (error) {
        console.error('Error adding checkboxes:', error);
    }
});


    // Add toolbar buttons if not already added
    if (!document.querySelector('#chat-manager-toolbar')) {
        const toolbar = document.createElement('div');
        toolbar.id = 'chat-manager-toolbar';
        toolbar.style = 'margin: 10px; display: flex; gap: 10px;';

        const selectAllButton = document.createElement('button');
        selectAllButton.id = 'select-all-btn';
        selectAllButton.textContent = 'Select All';
        selectAllButton.onclick = selectAllChats;

        const deleteSelectedButton = document.createElement('button');
        deleteSelectedButton.id = 'delete-selected-btn';
        deleteSelectedButton.textContent = 'Delete Selected';
        deleteSelectedButton.onclick = deleteSelectedChats;

        toolbar.appendChild(selectAllButton);
        toolbar.appendChild(deleteSelectedButton);
        document.body.prepend(toolbar);
    }


// Run the function after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    addCheckboxes();
});


    // Add toolbar buttons if not already added
    if (!document.querySelector('#chat-manager-toolbar')) {
        const toolbar = document.createElement('div');
        toolbar.id = 'chat-manager-toolbar';
        toolbar.style = 'margin: 10px; display: flex; gap: 10px;';

        const selectAllButton = document.createElement('button');
        selectAllButton.id = 'select-all-btn';
        selectAllButton.textContent = 'Select All';
        selectAllButton.onclick = selectAllChats;

        const deleteSelectedButton = document.createElement('button');
        deleteSelectedButton.id = 'delete-selected-btn';
        deleteSelectedButton.textContent = 'Delete Selected';
        deleteSelectedButton.onclick = deleteSelectedChats;

        toolbar.appendChild(selectAllButton);
        toolbar.appendChild(deleteSelectedButton);
        document.body.prepend(toolbar);
    }

// Function to select all chat checkboxes
function selectAllChats() {
    const checkboxes = document.querySelectorAll('.chat-checkbox');
    const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
    checkboxes.forEach((checkbox) => (checkbox.checked = !allChecked));
}

// Function to delete selected chats
function deleteSelectedChats() {
    const selectedChats = document.querySelectorAll('.chat-checkbox:checked');
    selectedChats.forEach((checkbox) => {
        const chatItem = checkbox.closest('[data-testid^="history-item-"]');
        const optionsButton = chatItem.querySelector('[data-testid$="-options"]');
        optionsButton.click();

        setTimeout(() => {
            const deleteButton = document.querySelector('[data-testid="delete-chat-menu-item"]');
            if (deleteButton) deleteButton.click();
        }, 100); // Small delay to allow menu to open
    });
}

// Inject checkboxes and buttons when script is executed
addCheckboxes();
console.log("Chat items:", chatItems); // Check if the chat items are being selected properly
console.log("Toolbar added:", document.querySelector('#chat-manager-toolbar'));


