import React from 'react'
import { RadioGroup, Radio } from 'c/Radio'
import Pre from '../Pre'
import { Props, Prop } from '../Props'

export default React.createClass({

  render() {
    return (
      <div>
        <h1>单选框</h1>
        <h2>RadioGroup</h2>
        <Pre>
{`import { RadioGroup, Radio } from 'bfd-ui/lib/Radio'

const App = React.createClass({

  render() {
    return (
      <RadioGroup>
        <Radio value="apple">苹果</Radio>
        <Radio value="mi">小米</Radio>
      </RadioGroup>
    )
  }
})`}
        </Pre>

        <RadioGroup>
          <Radio value="apple">苹果</Radio>
          <Radio value="mi">小米</Radio>
          <Radio value="samsung">三星</Radio>
        </RadioGroup>
        
        <Props>
          <Prop name="value" type="String">
            <p>默认选中的值，如果该值与某个 Radio 的值相同，则该 Radio 为选中状态</p>
          </Prop>
          <Prop name="onChange" type="Function">
            <p>切换选择后的回调，参数为选中的值</p>
          </Prop>
        </Props>
      </div>
    )
  }
})