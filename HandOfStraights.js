function isNStraightHand(hand, groupSize) {
  if (hand.length % groupSize !== 0) return false; // Quick check

  const count = new Map();
  for (let card of hand) {
    count.set(card, (count.get(card) || 0) + 1);
  }

  const uniqueCards = Array.from(count.keys()).sort((a, b) => a - b);

  for (let card of uniqueCards) {
    const currentCount = count.get(card);
    if (currentCount > 0) {
      for (let i = 0; i < groupSize; i++) {
        const nextCard = card + i;
        if (!count.has(nextCard) || count.get(nextCard) < currentCount) {
          return false;
        }
        count.set(nextCard, count.get(nextCard) - currentCount);
      }
    }
  }

  return true;
}
