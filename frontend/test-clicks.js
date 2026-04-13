// Simple test to verify bridge card click functionality
// This can be run in the browser console

console.log('Testing bridge card clicks...');

// Find all bridge cards
const bridgeCards = document.querySelectorAll('.bridge-card');
console.log(`Found ${bridgeCards.length} bridge cards`);

// Find all card surfaces (the clickable buttons)
const cardSurfaces = document.querySelectorAll('.card-surface');
console.log(`Found ${cardSurfaces.length} card surfaces`);

// Test click on first card surface if it exists
if (cardSurfaces.length > 0) {
  const firstCard = cardSurfaces[0];
  console.log('Testing click on first bridge card...');
  
  // Check if it has click handler
  const hasClickHandler = firstCard.onclick || firstCard.addEventListener;
  console.log('Card has click handler:', !!hasClickHandler);
  
  // Check computed styles to see if it's clickable
  const computedStyle = window.getComputedStyle(firstCard);
  console.log('Pointer events:', computedStyle.pointerEvents);
  console.log('Z-index:', computedStyle.zIndex);
  console.log('Display:', computedStyle.display);
  console.log('Cursor:', computedStyle.cursor);
  
  // Check if it's being covered by other elements
  const rect = firstCard.getBoundingClientRect();
  console.log('Card position:', rect);
  
  // Test if click works
  try {
    firstCard.click();
    console.log('Click triggered successfully');
  } catch (error) {
    console.error('Click failed:', error);
  }
} else {
  console.log('No bridge cards found');
}

// Check favorite buttons
const favoriteButtons = document.querySelectorAll('.favorite-inline');
console.log(`Found ${favoriteButtons.length} favorite buttons`);

if (favoriteButtons.length > 0) {
  const firstFavorite = favoriteButtons[0];
  const favStyle = window.getComputedStyle(firstFavorite);
  console.log('Favorite button z-index:', favStyle.zIndex);
  console.log('Favorite button pointer-events:', favStyle.pointerEvents);
}
