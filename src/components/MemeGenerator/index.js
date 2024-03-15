import {Component} from 'react'
import {
  MainContainer,
  InputElement,
  Heading,
  InputContainer,
  SelectElement,
  ImageContainer,
  CustomButton,
  ParaGraphTextOnImage,
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
    url: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    formSubmitted: false,
  }

  clickingDetails = event => {
    event.preventDefault()
    this.setState(prevState => ({formSubmitted: true}))
  }
  changeurl = event => {
    
    this.setState({url: event.target.value})
  }
  changeTopText = event => {
    this.setState({topText: event.target.value})
  }
  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }
  changeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {url, topText, bottomText, fontSize, formSubmitted} = this.state
    console.log(formSubmitted)
    return (
      <MainContainer>
        <InputContainer as="form" onSubmit={this.clickingDetails}>
          <Heading>Meme Generator</Heading>

          <label htmlFor="image">Image URL</label>

          <InputElement
            id="image"
            type="input"
            placeholder="Enter the Image Url"
            onChange={this.changeurl}
            value={url}
          />
          <br />
          <br />
          <label htmlFor="topText">Top Text</label>

          <InputElement
            id="topText"
            type="input"
            placeholder="Enter the Top Text"
            onChange={this.changeTopText}
            value={topText}
          />
          <br />
          <br />
          <label htmlFor="bottomText">Bottom Text</label>

          <InputElement
            id="bottomText"
            type="input"
            placeholder="Enter the Bottom Text"
            onChange={this.changeBottomText}
            value={bottomText}
          />
          <br />
          <br />
          <label htmlFor="selectEle">Font Size</label>
          <SelectElement
            type="select"
            id="selectEle"
            onChange={this.changeFontSize}
            value={fontSize}
          >
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId}>{each.displayText}</option>
            ))}
          </SelectElement>
          <CustomButton type="submit">Generate</CustomButton>
        </InputContainer>
        {formSubmitted && (
          <ImageContainer url={url} data-testid="meme">
            <ParaGraphTextOnImage fontSize={fontSize}>
              {topText}
            </ParaGraphTextOnImage>
            <ParaGraphTextOnImage fontSize={fontSize}>
              {bottomText}
            </ParaGraphTextOnImage>
          </ImageContainer>
        )}
      </MainContainer>
    )
  }
}
export default MemeGenerator
