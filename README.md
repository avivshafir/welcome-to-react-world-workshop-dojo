# Inno Movies

## Getting started from this repo:

- clone repo && cd into repo
- run `npm install`
- run `npm start`

## Getting started from scratch

- run `npm i -g create-react-app`
- run `create-react-app inno-movies`
- `cd inno-movies`
- run `echo 'SKIP_PREFLIGHT_CHECK=true' > .env`

### To install and run storybook

```
npx -p @storybook/cli@alpha sb init
npm i @storybook/react@4.0.0-alpha.24
npm run storybook
```

### To install and run applitools tests

- Requires the APPLITOOLS_API_KEY in your env variables.

```
npm i @applitools/eyes.storybook
npx eyes-storybook --build --debug
```

### To install and run cypress tests

```
npm i cypress --save-dev
npx cypress open
```

### Install react-pose js animation library

```
npm i react-pose
```

```
import posed, { PoseGroup } from "react-pose";

var Item = posed.div();

<PoseGroup>
{this.props.movies.map(m => (
    <Item key={m.id}>
        <Movie movie={m} />
    </Item>
))}
</PoseGroup>
```

### React Jest snapshot tests

```
npm i react-test-renderer
```

```
it("Movies snapshot test", () => {
    const tree = renderer.create(<Movies movies={movies} />).toJSON();
    expect(tree).toMatchSnapshot();
});
```
