module.exports = {
  ...jest.requireActual('react-router-dom'),
  useLocation: () => window.location
}
