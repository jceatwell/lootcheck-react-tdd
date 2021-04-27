const { shallow } = require("enzyme");
const { default: App } = require("./App");

describe('App', () => {
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a Wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });
});