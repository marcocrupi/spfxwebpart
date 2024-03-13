import * as React from "react";
import styles from "./Fluentuitest.module.scss";
import type { IFluentuitestProps } from "./IFluentuitestProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Button } from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";

export default class Fluentuitest extends React.Component<
  IFluentuitestProps,
  {}
> {
  public render(): React.ReactElement<IFluentuitestProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

    return (
      <section
        className={`${styles.fluentuitest} ${
          hasTeamsContext ? styles.teams : ""
        }`}
      >
        <div className={styles.welcome}>
          <img
            alt=""
            src={
              isDarkTheme
                ? require("../assets/welcome-dark.png")
                : require("../assets/welcome-light.png")
            }
            className={styles.welcomeImage}
          />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>
            Web part property value: <strong>{escape(description)}</strong>
          </div>
        </div>
        <div>
          <h3>Welcome to SharePoint Framework!</h3>
        </div>
        <div className={styles.wrapper}>
          <Button icon={<CalendarMonthRegular />}>Default</Button>
          <Button appearance="primary" icon={<CalendarMonthRegular />}>
            Primary
          </Button>
          <Button appearance="outline" icon={<CalendarMonth />}>
            Outline
          </Button>
          <Button appearance="subtle" icon={<CalendarMonth />}>
            Subtle
          </Button>
          <Button appearance="transparent" icon={<CalendarMonth />}>
            Transparent
          </Button>
        </div>
      </section>
    );
  }
}
