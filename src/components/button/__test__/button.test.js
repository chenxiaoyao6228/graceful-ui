import { render, fireEvent } from '@testing-library/vue';
import Button from '../button.vue';

const prefix = 'g-button';

describe('Button', () => {
  test('iconPosition', () => {
    const { getByTestId } = render({
      components: { Button },
      template: `
        <Button data-testid="button" icon="download" iconPosition="right">按钮</Button>
      `
    });
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('icon-right'); // 使用flex => order:2来进行定位
  });

  test('disabled', () => {
    const { getByTestId } = render({
      components: { Button },
      template: `
        <Button disabled data-testid="button">按钮</Button>
      `
    });
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(`${prefix}-disabled`);
  });

  test('loading', async () => {
    const { getByTestId } = render({
      components: { Button },
      template: '<Button data-testid="button" :loading="loading" @click="loading = !loading">按钮</Button>',
      data() {
        return { loading: false };
      }
    });
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass('loading');
    await fireEvent.click(button);
    expect(button).toHaveClass('loading');
  });

  test('button type', () => {
    const { getByTestId } = render({
      components: { Button },
      template: `
        <Button type="error" data-testid="button">按钮</Button>
      `
    });
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(`${prefix}-error`);
  });

  test('icon type', () => {
    const { container } = render(Button, {
      props: {
        icon: 'download'
      }
    });
    expect(container.innerHTML).toEqual(
      '<button class="g-button g-button-default g-button-size-medium"><svg class="icon g-icon"><use xlink:href="#icon-download" aria-hidden="true"></use></svg> <!----> <div class="content"></div></button>'
    );
  });

  test('click event', async () => {
    const testId = 'g-button-click';
    const spy = jest.fn();
    const ButtonClickElement = {
      template: `<Button @click="spy" data-testid="${testId}"></Button >`,
      methods: { spy }
    };
    const { getByTestId } = render(ButtonClickElement, {});
    const buttonElement = getByTestId(testId);
    await fireEvent.click(buttonElement);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
