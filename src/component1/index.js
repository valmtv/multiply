// @flow
import React from 'react';

type Props = {|
  value?: string,
|};

const Component1 = ({
  value = '',
}: Props) => <div>
  Component1
  { value }
</div>;

export default Component1;
