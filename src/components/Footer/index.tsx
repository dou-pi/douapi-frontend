import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
   const defaultMessage = '豆皮出品必属精品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
       copyright={`${currentYear} ${defaultMessage}`}
      links={[

        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/dou-pi/douapi-frontend',
          blankTarget: true,
        },
        {
          key: '豆皮接口',
          title: '豆皮接口',
          href: 'https://github.com/dou-pi/douapi-frontend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
