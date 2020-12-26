import * as React from 'react';
import styles from './WebpartTemplate.module.scss';
import { IWebpartTemplateProps } from './IWebpartTemplateProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class WebpartTemplate extends React.Component<IWebpartTemplateProps, {}> {
  public render(): React.ReactElement<IWebpartTemplateProps> {
    return (
      <div className={ styles.webpartTemplate }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <h1 className={ styles.title }>Welcome to SharePoint!</h1>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts. Update</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
