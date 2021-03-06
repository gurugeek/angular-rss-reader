import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelFormComponent } from './channels/channel-form/channel-form.component';
import { ChannelComponent } from './channels/channel/channel.component';
import { ChannelsService } from './shared/services/channels.service';
import { MessagesService } from './shared/services/messages.service';
import { HelperService } from './shared/services/helper.service';
import { ChannelResolver } from './shared/services/channel-resolver.service';
import { TrimPipe } from './shared/pipes/trim.pipe';
import { ChannelsListComponent } from './channels/channels-list/channels-list.component';
import { StatisticComponent } from './statistics/statistic/statistic.component';
import { HttpClientModule } from '@angular/common/http';
import { Rss2jsonService } from './shared/services/rss2json.service';
import { MessageComponent } from './channels/channel/message/message.component';
import { MessageResolver } from './shared/services/message-resolver.service';
import { StatisticResolver } from './shared/services/statistic-resolver.service';
import { StatisticService } from './shared/services/statistic.service';
import { ChartModule } from 'angular-highcharts';
import { MessagesListComponent } from './channels/channel/messages-list/messages-list.component';
import { StatisticMessageComponent } from './statistics/statistic/statistic-message/statistic-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    ChannelsComponent,
    ChannelFormComponent,
    ChannelComponent,
    TrimPipe,
    ChannelsListComponent,
    StatisticsComponent,
    StatisticComponent,
    StatisticMessageComponent,
    MessageComponent,
    MessagesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    ChannelsService,
    MessagesService,
    StatisticService,
    HelperService,
    Rss2jsonService,
    ChannelResolver,
    MessageResolver,
    StatisticResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
