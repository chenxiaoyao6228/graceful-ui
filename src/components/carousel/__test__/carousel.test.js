import { render } from '@testing-library/vue';
import Carousel from '../carousel.vue';
import CarouselItem from '../carousel-item.vue';

describe('Carousel', () => {
  const testComponent = {
    components: { Carousel, CarouselItem },
    template: `
        <carousel v-model="value">
            <carousel-item v-for="item in list" :key="item">
                <div class="box">{{item}}</div>
            </carousel-item>
        </carousel>
      `,
    data() {
      return {
        value: 2,
        list: [0, 1, 2, 3]
      };
    }
  };
  test('match snapshots', () => {
    const { container } = render(testComponent);
    expect(container).toMatchSnapshot();
  });
});
