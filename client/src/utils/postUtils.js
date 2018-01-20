export function getTotalVotes(post) {
  let total = 0;
  if (!post.postVotes) { return 0 }
  post.postVotes.forEach(vote => {
    total += vote.vote / Math.abs(vote.vote);
  })
  return total;
}
