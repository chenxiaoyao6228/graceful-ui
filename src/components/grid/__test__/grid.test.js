import { render } from '@testing-library/vue';
import Col from '../col.vue';
import Row from '../row.vue';

describe('Grid', () => {
  it('match Snapshot', () => {
    const testComponent = {
      components: { Row, Col },
      template: `
        <Row :gutter="4">
          <Col span="8" offset="2">
            <div>这里是内容1</div>
          </Col>
          <Col span="8" offset="2">
            <div>这里是内容2</div>
          </Col>
        </Row>
      `
    };
    const { container } = render(testComponent);
    expect(container).toMatchSnapshot();
  });
});
