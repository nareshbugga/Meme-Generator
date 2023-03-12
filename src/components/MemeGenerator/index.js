import {Component} from 'react'
import {
  InputFlexContainer,
  Label,
  Input,
  Select,
  Heading,
  Container,
  Button,
  SubContainer,
  FormContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    image: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionIds,
    imageValue: '',
    topValue: '',
    bottomValue: '',
    fontSizeValue: '',
  }

  onImage = event => {
    this.setState({image: event.target.value})
  }

  onTopText = event => {
    this.setState({topText: event.target.value})
  }

  onBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onOption = event => {
    this.setState({fontSize: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {image, topText, bottomText, fontSize} = this.state
    this.setState({
      imageValue: image,
      topValue: topText,
      bottomValue: bottomText,
      fontSizeValue: fontSize,
    })
  }

  render() {
    const {
      image,
      topText,
      bottomText,
      fontSize,
      imageValue,
      topValue,
      bottomValue,
      fontSizeValue,
    } = this.state
    return (
      <>
        <Container>
          <FormContainer onSubmit={this.onFormSubmit}>
            <Heading>Meme Generator</Heading>
            <InputFlexContainer>
              <Label htmlFor="image url">Image Url</Label>
              <Input
                type="text"
                id="image url"
                onChange={this.onImage}
                value={image}
                placeholder="Enter the Image url"
              />
            </InputFlexContainer>
            <InputFlexContainer>
              <Label htmlFor="top text">Top Text</Label>
              <Input
                type="text"
                id="top text"
                onChange={this.onTopText}
                value={topText}
                placeholder="Enter the Top Text"
              />
            </InputFlexContainer>
            <InputFlexContainer>
              <Label htmlFor="bottom text">Bottom Text</Label>
              <Input
                type="text"
                id="bottom text"
                onChange={this.onBottomText}
                value={bottomText}
                placeholder="Enter the Bottom Text"
              />
            </InputFlexContainer>
            <InputFlexContainer>
              <Label htmlFor="font size">Font Size</Label>
              <Select id="font size" onChange={this.onOption} value={fontSize}>
                {fontSizesOptionsList.map(eachList => (
                  <option key={eachList.optionId}>
                    {eachList.displayText}
                  </option>
                ))}
              </Select>
            </InputFlexContainer>
            <Button type="submit">Generate</Button>
          </FormContainer>
          <SubContainer value={imageValue} data-testid="meme">
            <Text value={fontSizeValue}>{topValue}</Text>
            <Text value={fontSizeValue}>{bottomValue}</Text>
          </SubContainer>
        </Container>
      </>
    )
  }
}
export default MemeGenerator
