export default function(config) {
    const self = this;
    self.componentToShow = undefined;
    config.forEach((current) => {
        if (current.path === window.location.pathname) {
            self.componentToShow = current.component;
        }
    })
}