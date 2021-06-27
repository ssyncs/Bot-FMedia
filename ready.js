module.exports = async(client, data) => {
    client.user.setActivity(`Bot pour FMedia`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/17syncs"
      });
}