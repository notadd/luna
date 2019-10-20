import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Radio,RadioGroup } from '@tarojs/components'

import './index.scss'

type PageStateProps = {
    label: string;
    values: any[];
}

class Index extends Component<PageStateProps> {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
      const {values,label} = this.props;
    return (
      <View className='form-item'>
          <View className='form-item-container'>
            <View className='form-item-label'>{label}</View>
            <View className='form-item-input'>
                <RadioGroup className="form-radio-group">
                    {values.map(value=> {
                        return <View className="form-radio-item">
                            <Radio color="red" value={value}></Radio>
                            <View>{value}</View>
                        </View>
                    })}
                </RadioGroup>
            </View>
          </View>
      </View>
    )
  }
}

export default Index  as ComponentType<PageStateProps>
