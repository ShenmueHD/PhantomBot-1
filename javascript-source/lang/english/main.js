$.lang.register('chatmoderator.ban.success', '$1 has been banned for $2 hours');
$.lang.register('chatmoderator.ban.usage', 'Usage: !ban [username] [hours]');
$.lang.register('chatmoderator.permit.success', '$1 permitted $2 to post a link during the next $3 seconds!');
$.lang.register('chatmoderator.permit.usage', 'Usage: !permit [username]');
$.lang.register('chatmoderator.purge.success', '$1 has been purged.');
$.lang.register('chatmoderator.purge.usage', 'Usage: !purge [username]');
$.lang.register('chatmoderator.set.capstriggerlength.success', 'Set The caps moderator trigger length to $1.');
$.lang.register('chatmoderator.set.capstriggerlength.usage', 'Usage !chatmod setcapstriggerlength [amount].');
$.lang.register('chatmoderator.set.capstriggerratio.success', 'Set The caps moderator trigger ratio to $1.');
$.lang.register('chatmoderator.set.capstriggerratio.usage', 'Usage !chatmod setcapstriggerratio [0-1].');
$.lang.register('chatmoderator.set.common.message.success', 'Message for purging $1 has been set to "$2".');
$.lang.register('chatmoderator.set.common.usage', 'Usage: !chatmod $1 [message].');
$.lang.register('chatmoderator.set.linkpermittime.success', 'Set the permit time for posting links to $1 seconds.');
$.lang.register('chatmoderator.set.linkpermittime.usage', 'Usage: !chatmod setlinkpermittime [seconds].');
$.lang.register('chatmoderator.set.repeatchartriggerlength.success', 'Set The repeated character moderator trigger count to $1.');
$.lang.register('chatmoderator.set.repeatchartriggerlength.usage', 'Usage !chatmod setrepeatchartriggerlength [amount].');
$.lang.register('chatmoderator.set.symbolstriggercount.success', 'Set The symbols moderator trigger count to $1.');
$.lang.register('chatmoderator.set.symbolstriggercount.usage', 'Usage !chatmod symbolstriggercount [amount].');
$.lang.register('chatmoderator.timeout.success', '$1 has been timed out.');
$.lang.register('chatmoderator.timeout.success.fortime', '$1 has been timed out for $2 minutes.');
$.lang.register('chatmoderator.timeout.usage', 'Usage: !timeout [username] [[seconds]]');
$.lang.register('chatmoderator.toggle.capsallowed', 'Caps spam is now $1.');
$.lang.register('chatmoderator.toggle.common.allowed', 'allowed');
$.lang.register('chatmoderator.toggle.common.moderated', 'Moderated');
$.lang.register('chatmoderator.toggle.linksagressive', 'Agressive link scanning is $1.');
$.lang.register('chatmoderator.toggle.linksallowed', 'Links are now $1.');
$.lang.register('chatmoderator.toggle.Regularslinksallowed', 'Links from Regulars are $1.');
$.lang.register('chatmoderator.toggle.repeatcharallowed', 'Repeated Character spam is now $1.');
$.lang.register('chatmoderator.toggle.symbolsallowed', 'Symbol spam is now $1.');
$.lang.register('chatmoderator.toggle.youtubelinksallowed', 'Youtube Links are now $1.');
$.lang.register('chatmoderator.unban.success', '$1 has been unbanned.');
$.lang.register('chatmoderator.unban.usage', 'Usage: !unban [username] [hours]');
$.lang.register('chatmoderator.whitelist.success', 'Added "$1" to the link whitelist. links from this domain will no longer get purged.');
$.lang.register('chatmoderator.whitelist.usage', 'Usage: !whitelist [domainname]');
$.lang.register('cmd.404', 'command !$1 does not exist or is not registered.');
$.lang.register('cmd.adminonly', 'Only an Administrator has access to that command!');
$.lang.register('cmd.casteronly', 'Only a Caster has access to that command!');
$.lang.register('cmd.modonly', 'Only a Moderator has access to that command!');
$.lang.register('cmd.needpoints', 'That command costs $1, which you don\'t have.');
$.lang.register('cmd.noperm', 'Your user group, $1, does not have permission to use the command $2.');
$.lang.register('commandlist.commands', 'Commands (page $1 of $2): $3');
$.lang.register('commandlist.more', ' >> Type "!commands $1" for more');
$.lang.register('commandlist.nocommands', 'There are currently no commands available to you');
$.lang.register('commandlist.nopage', 'page $1 does not exist!');
$.lang.register('commandlist.progress', 'Exporting commands... $1%');
$.lang.register('commandpause.ended', 'All commands are enabled again.');
$.lang.register('commandpause.initiated', 'All commands are disabled for $1.');
$.lang.register('commandpause.isactive', 'All commands are currently disabled.');
$.lang.register('common.disabled', 'disabled');
$.lang.register('common.enabled', 'enabled');
$.lang.register('common.user-error', 'You must specify a user to target with this command');
$.lang.register('common.user.404', 'The user "$1" has not visited this channel yet.');
$.lang.register('console.channel.ishosting', '$1 is currently hosting $2.');
$.lang.register('console.loggingstatus', 'Logging is $1');
$.lang.register('console.received.clearchat', 'Received a clear chat notification from jtv');
$.lang.register('console.received.host.end', 'Received an end host mode notification from jtv');
$.lang.register('console.received.host.start', 'Received a start host mode notification on user $1 from jtv');
$.lang.register('console.received.irsprivmsg', 'Received a PM from $1: $2');
$.lang.register('console.received.purgetimeoutban', 'Received a purge/timeout/ban notification on user $1 from jtv');
$.lang.register('console.received.r9k.end', 'Received an end r9k mode notification from jtv');
$.lang.register('console.received.r9k.start', 'Received a start r9k mode notification from jtv');
$.lang.register('console.received.slowmode.end', 'Received an end slow mode notification from jtv');
$.lang.register('console.received.slowmode.start', 'Received a start slow mode ($1) notification from jtv');
$.lang.register('console.received.subscriberonly.end', 'Received an end subscribers-only mode notification from jtv');
$.lang.register('console.received.subscriberonly.start', 'Received a start subscribers-only mode notification from jtv');
$.lang.register('cooldown.active', 'The cool down for "!$1" has not expired yet! $2 until cool down is over!');
$.lang.register('cooldown.clear.success', 'Cleared all cooldowns for !$1');
$.lang.register('cooldown.clear.usage', 'Usage: "!clearcooldown [command]"');
$.lang.register('cooldown.set.success', 'Cool down for "!$1" is now $2');
$.lang.register('cooldown.set.success', 'Cooldown for !$1 set to $2.');
$.lang.register('cooldown.set.usage', 'Usage: !cooldown [command] [seconds]');
$.lang.register('cooldown.set.usage', 'Usage: "!cooldown [command] [seconds]".');
$.lang.register('cooldown.unPause.success', 'Cleared cool down for !$1.');
$.lang.register('cooldown.unPause.usage', 'Usage: !clearcooldown [command]');
$.lang.register('followhandler.anouncements.enabled', '>> Enabling new follower announcements');
$.lang.register('followhandler.check.follows', '$1 is following the channel.');
$.lang.register('followhandler.check.notfollows', '$1 is not followeing the channel.');
$.lang.register('followhandler.check.usage', 'Usage: !follows [username]');
$.lang.register('followhandler.followers', '$1 users are following this channel!');
$.lang.register('followhandler.followtrain.mega', 'Mega follow train!! ($1)');
$.lang.register('followhandler.followtrain.penta', 'Penta follow!!');
$.lang.register('followhandler.followtrain.quad', 'Quadra follow!!');
$.lang.register('followhandler.followtrain.triple', 'Triple follow!!');
$.lang.register('followhandler.followtrain.ultra', 'Ultra follow train!! ($1)');
$.lang.register('followhandler.followtrain.unbelievable', 'Unbelievable follow train!! ($1)');
$.lang.register('followhandler.new.follow', 'Welcome $1 and thank you for following! I\'ve rewared you $2 for use in games and raffles!');
$.lang.register('followhandler.new.follow.noreward', 'Welcome $1 and thank you for following!');
$.lang.register('followhandler.set.followreward.success', 'Follow reward set to $1.');
$.lang.register('followhandler.set.followreward.usage', 'Usage: !followreward [$1]');
$.lang.register('hosthandler.hostcount', 'This channel is currently being hosted by $1 channels!');
$.lang.register('hosthandler.hostlist', 'This channel is currently being hosted by $1!');
$.lang.register('hosthandler.newhost', 'Thanks for the host $1!');
$.lang.register('hosthandler.newhost.reward', 'Thanks for the host $1! You\'re rewarded $2 for being awesome!!');
$.lang.register('hosthandler.set.hostreward.success', 'New hoster reward set to: $1.');
$.lang.register('hosthandler.set.hostreward.usage', 'Usage: !hostreward [$1]');
$.lang.register('init.cmsgset', 'Connected message set!');
$.lang.register('init.module.404', 'That module does not exist or is not loaded!');
$.lang.register('init.module.check.disabled', 'Module $1 is currently disabled!');
$.lang.register('init.module.check.enabled', 'Module $1 is currently enabled!');
$.lang.register('init.module.disabled', 'Module "$1" disabled!');
$.lang.register('init.module.enabled', 'Module "$1" enabled!');
$.lang.register('init.module.list', '$1 registered modules: $2');
$.lang.register('init.module.usage', 'Usage: !module list, !module enable [module name], !module disable [module name], !module status [module name]');
$.lang.register('init.reconnect', 'Brb, reconnecting to Twitch IRC!');
$.lang.register('lang.curlang', 'The current language is $1!');
$.lang.register('lang.lang.404', 'That language file does not exist!');
$.lang.register('lang.lang.changed', 'Changed language to $1!');
$.lang.register('lang.response.action.disabled', 'Chat output will be normal text. (without /me)');
$.lang.register('lang.response.action.enabled', 'Chat output wil be prepended with "/me".');
$.lang.register('lang.response.disabled', 'Responses are now disabled! To enable them, use !mute');
$.lang.register('lang.response.enabled', 'Responses are now enabled! To disable them, use: !mute');
$.lang.register('logging.disabled', 'Logging is disabled!');
$.lang.register('logging.enabled', 'Logging is enabled!');
$.lang.register('permissions.current.listtoolong', 'There are over $1 to list, I suggest checking the viewerslist in the Twitch chat.');
$.lang.register('permissions.current.mods', 'Mods in channel: $1');
$.lang.register('permissions.current.users', 'Users in channel: $1');
$.lang.register('permissions.group.self.current', 'You\'re in the $1 group.');
$.lang.register('permissions.group.set.error.abovegroup', 'You must be a higher group than the person you are trying to promote!');
$.lang.register('permissions.group.set.error.samegroup', 'You cannot promote others to the same group as you.');
$.lang.register('permissions.group.set.success', 'Group for $1 changed to $2!');
$.lang.register('permissions.group.usage', 'Usage: !group, !group [name] [groupid]');
$.lang.register('pointsystem.add.all.success', '$1 have been sent to everybody in the channel!');
$.lang.register('pointsystem.add.all.usage', 'Usage: "!points all [amount]"');
$.lang.register('pointsystem.add.error.negative', 'You can not give negative $1.');
$.lang.register('pointsystem.add.success', 'Sent $1 to $2. New balance is $3.');
$.lang.register('pointsystem.add.usage', 'Usage: "!points give [name] [amount]"');
$.lang.register('pointsystem.get.self.nopoints', 'You currently have no $1. Stay in the chat to start gaining $1!');
$.lang.register('pointsystem.get.self.withtime', '$1 currently has $2 and has been in the chat for $3.');
$.lang.register('pointsystem.makeitrain.error.invalid', 'Sorry, but it\'s not possible to rain $1 at the moment.');
$.lang.register('pointsystem.makeitrain.error.needpoints', 'You can not afford to make it rain $1.');
$.lang.register('pointsystem.makeitrain.error.negative', 'You can not make it rain negative $1.');
$.lang.register('pointsystem.makeitrain.success', 'A rainstorm\'s incoming! $1 is throwing $2 in the air! $3');
$.lang.register('pointsystem.makeitrain.usage', 'Usage: "!makeitrain [amount]"');
$.lang.register('pointsystem.modpermtoggle.success', 'Users in the group $1 or higher are now able to use point management commands.');
$.lang.register('pointsystem.set.bonus.error.negative', 'You can not set the bonus per group level to negative $1.');
$.lang.register('pointsystem.set.bonus.success', 'Set the $1 bonus to $2 per group level.');
$.lang.register('pointsystem.set.bonus.usage', 'Usage: "!points bonus [amount]"');
$.lang.register('pointsystem.set.gain.error.negative', 'You can not set the amount of $1 gained to a negative number.');
$.lang.register('pointsystem.set.gain.offline.success', 'Set the $1 earnings to $2 every $3 minute(s) while the stream is offline.');
$.lang.register('pointsystem.set.gain.offline.usage', 'Usage: "!points setofflinegain [amount]"');
$.lang.register('pointsystem.set.gain.success', 'Set the $1 earnings to $2 every $3 minute(s) while the stream is online.');
$.lang.register('pointsystem.set.gain.usage', 'Usage: "!points setgain [amount]"');
$.lang.register('pointsystem.set.interval.error.negative', 'You can not set the $1 payout interval to negative minutes.');
$.lang.register('pointsystem.set.interval.offline.success', 'Set the $1 payout interval to $2 minute(s) when the stream is offline.');
$.lang.register('pointsystem.set.interval.offline.usage', 'Usage: "!points setofflineinterval [amount]"');
$.lang.register('pointsystem.set.interval.success', 'Set the $1 payout interval to $2 minute(s) when the stream is online.');
$.lang.register('pointsystem.set.interval.usage', 'Usage: "!points setinterval [amount]"');
$.lang.register('pointsystem.set.name.both.success', 'The name of the points have now been changed from "$1" to "$2". Set the name for a single $2 using "!points name single [name]".');
$.lang.register('pointsystem.set.name.multiple.success', 'Name of multiple points successfully changed from "$1" to "$2". To set the name for a single $2 use "!points name single [name]".');
$.lang.register('pointsystem.set.name.single.success', 'Name of a single point successfully changed from "$1" to "$2". To set the name for multiple $2 use "!points name multiple [name]".');
$.lang.register('pointsystem.set.name.usage', 'To change the name of a single point, use "!points name single [name]". To change the name of multiple points, use "!points name <"multi" or "multiple"> [name]".');
$.lang.register('pointsystem.setbalance.error.negative', 'You can not set a balance to negative $1.');
$.lang.register('pointsystem.setbalance.success', 'Set the $1 balance of $2 to $3.');
$.lang.register('pointsystem.setbalance.usage', 'Usage: "!points set [name] [amount]"');
$.lang.register('pointsystem.take.error.toomuch', 'You can not take more than what $1 has in $2.');
$.lang.register('pointsystem.take.success', 'Taken $1 from $2. New balance is $3.');
$.lang.register('pointsystem.take.usage', 'Usage: "!points take [name] [amount]"');
$.lang.register('timesystem.add.error.negative', 'You can not give negative time.');
$.lang.register('timesystem.add.success', 'Sent $1 to $2. New balance is $3.');
$.lang.register('timesystem.add.usage', 'Usage: "!time give [name] [amount]"');
$.lang.register('timesystem.autolevel.disabled', 'Users will no longer be promoted to $1 when they have been in the chat for $2 hour(s).');
$.lang.register('timesystem.autolevel.enabled', 'Users will now be promoted to $1 when they have been in the chat for $2 hour(s).');
$.lang.register('timesystem.autolevel.promoted', '$1 has been promoted to $2 by being in the chat for $3 hour(s). Congratulations!');
$.lang.register('timesystem.get.other', '$1 currently spent $2 in the chat.');
$.lang.register('timesystem.modpermtoggle.success', 'Users in the group $1 or higher are now able to use time management commands.');
$.lang.register('timesystem.offlinetime.disabled', 'Offline time will not longer be counted towards the time.');
$.lang.register('timesystem.offlinetime.enabled', 'Offline time will now be counted towards the time.');
$.lang.register('timesystem.set.promotehours.error.negative', 'You can not set the time in hours to promote a user to $1 to a negative number.');
$.lang.register('timesystem.set.promotehours.success', 'Set the time in hours to promote a user to $1 to $2.');
$.lang.register('timesystem.set.promotehours.usage', 'Usage: "!time promotehours [amount]"');
$.lang.register('timesystem.set.timezone.invalid', '"$1" is not a valid time zone. A list of time zones can be found on "http://en.wikipedia.org/wiki/List_of_tz_database_time_zones".');
$.lang.register('timesystem.set.timezone.success', 'The time zone has been set to "$1".');
$.lang.register('timesystem.set.timezone.usage', 'Usage: "!timezone [name]"');
$.lang.register('timesystem.settime.error.negative', 'You can not set a balance to negative time.');
$.lang.register('timesystem.settime.success', 'Set the time balance of $1 to $2.');
$.lang.register('timesystem.settime.usage', 'Usage: "!time set [name] [amount]"');
$.lang.register('timesystem.streamertime', 'It is currently $1 where $2 is located.');
$.lang.register('timesystem.take.error.toomuch', 'You can not take more than what $1 has in time.');
$.lang.register('timesystem.take.success', 'Taken $1 from $2. New balance is $3.');
$.lang.register('timesystem.take.usage', 'Usage: "!time take [name] [amount]"');
$.lang.register('whisper.whispers.disabled', '[Whisper Mode] has been disabled.');
$.lang.register('whisper.whispers.enabled', '[Whisper Mode] has been enabled.');
