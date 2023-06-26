import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: '简单上手',
    //Svg: require('@site/static/img/Easy.svg').default,
    description: (
      <>
        傻瓜式操作，不需要过多学习就可以立马上手操作软件。图标方便孩童识别，文字识别度高，交互体验好。
      </>
    ),
  },
  {
    title: '自由度高',
    //Svg: require('@site/static/img/Free.svg').default,
    description: (
      <>
        用户可在手帐内自由添加多媒体文件、贴纸，还能自由修改文字颜色、手帐背景。
      </>
    ),
  },
  {
    title: '功能强大',
    //Svg: require('@site/static/img/Feature.svg').default,
    description: (
      <>
        开屏展示当地天气，自由更改主页背景，创建手帐分享手帐等多种功能，满足你的梦想。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}