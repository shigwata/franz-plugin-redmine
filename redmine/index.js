module.exports = (Franz) => {
    class Redmine extends Franz {
        validateServer(URL) {
            const api = `${URL}`;
            return new Promise((resolve, reject) => {
                $.get(api, (resp) => {
                    resolve();
                }).fail(reject);
            });
        }
    }

    return Redmine;
};
