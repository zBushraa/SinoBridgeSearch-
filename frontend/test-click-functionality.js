// Test script to verify bridge card click functionality
// Run this in the browser console to test

console.log('🔍 Testing SinoBridge Explore Page Click Functionality');
console.log('=====================================================');

// 1. Check if bridge cards exist
const bridgeCards = document.querySelectorAll('.bridge-card');
console.log(`✅ Found ${bridgeCards.length} bridge cards`);

// 2. Check if card surfaces (clickable areas) exist
const cardSurfaces = document.querySelectorAll('.card-surface');
console.log(`✅ Found ${cardSurfaces.length} card surfaces`);

// 3. Check if favorite buttons exist
const favoriteButtons = document.querySelectorAll('.favorite-inline');
console.log(`✅ Found ${favoriteButtons.length} favorite buttons`);

// 4. Test click functionality
if (cardSurfaces.length > 0) {
  const firstCard = cardSurfaces[0];
  const bridgeName = firstCard.querySelector('h3')?.textContent || 'Unknown';
  
  console.log(`🖱️  Testing click on: "${bridgeName}"`);
  
  // Check if element is visible and clickable
  const rect = firstCard.getBoundingClientRect();
  const isVisible = rect.width > 0 && rect.height > 0;
  console.log(`📐 Card dimensions: ${rect.width}x${rect.height}`);
  console.log(`👁️  Card is visible: ${isVisible}`);
  
  // Check computed styles
  const styles = window.getComputedStyle(firstCard);
  console.log(`🎨 Pointer events: ${styles.pointerEvents}`);
  console.log(`🎨 Z-index: ${styles.zIndex}`);
  console.log(`🎨 Cursor: ${styles.cursor}`);
  
  // Test the click
  console.log('🖱️  Simulating click...');
  try {
    firstCard.click();
    console.log('✅ Click executed successfully!');
    console.log('🔍 Check console above for "Bridge clicked:" message');
  } catch (error) {
    console.error('❌ Click failed:', error);
  }
} else {
  console.log('❌ No bridge cards found to test');
}

// 5. Test favorite button
if (favoriteButtons.length > 0) {
  const firstFavorite = favoriteButtons[0];
  console.log('❤️  Testing favorite button click...');
  
  try {
    firstFavorite.click();
    console.log('✅ Favorite button clicked!');
    console.log('🔍 Check console above for "Favorite button clicked:" message');
  } catch (error) {
    console.error('❌ Favorite button click failed:', error);
  }
}

console.log('=====================================================');
console.log('🎯 Test completed! Check the console logs above.');
console.log('💡 If you see "Bridge clicked:" or "Favorite button clicked:" messages, the fix is working!');
