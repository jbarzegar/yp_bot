module.exports = message => {
  if (
    message.channel.id === 185194679304716288 &&
    message.author.id === 160405342398709761
  ) {
    message
      .delete()
      .then(() =>
        message.author.sendMessage(
          `${message.author
            .username}, You've been suspected of using a bot/script to promo yourself, and thus have been blacklisted temporarily until you can resolve the issue.  Please seek out one of the mods in East Side Ballas.  Until then.  All your promos will be deleted.`
        )
      );
  }
};
