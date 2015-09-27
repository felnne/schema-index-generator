# Schema Index Generator

Proof of concept application to scan through a set of JSON schemas organised in an assumed directory structure to produce an index of schema's grouped by project.

## Overview

TODO.

### TODO

Roughly from highest to lowest priority:

TODO.

### Background

This project is part of a larger/wider effort to make iterative development and deployment of BAS APIs easier and carry less risk to their reliability and availability. Specially we aim to:

* Use isolated environments to develop, stage/test and deploy into production
* Use better tools for provisioning/configuration these environments
* Use linting, code-formatting and other similar tools to prevent simple errors (no more 'Whoops, missed a `;`' commits)
* Reduce the need for manual testing when changes are made and prevent 'I forgot that edge case' type testing mistakes
* Minimise lengthy, and easily out-of-date, documentation by documenting through code where possible
* Make deployments to staging/manual-testing and production environments automatic including rolling-back changes, where possible, 
* Monitor the state of our deployed services better to spot problems before users/clients do
* Make our services more robust and available using fail-overs where this make sense

This is obviously quite a lot to work on, and will be tackled through a number of different, smaller, projects like this one.

TODO: Rewrite for this project:

> This project focuses on *Reducing the need for manual testing when changes are made and prevent 'I forgot that edge case' type testing mistakes*, but relates to other projects, namely:
>
> The tests performed by Newman will need to executed by *something*, ideally this would be some sort of Continuous Integration (CI) service, such as [Semaphore](semaphoreci.com) or [Bamboo](https://www.atlassian.com/software/bamboo), though manual testing will still be needed.
>
> This API testing will form part of a Continuous Deployment (CD) process (i.e. only deploy if tests are green). Ideally the CI and CD process would both be performed by the same service (in additional to manually) to reduce costs and configuration.

### Project management

This project will be developed using the Government Digital Service (GDS) design phases methodology [1].This project is in *Discovery*.

The Project Maintainer for this project is: [Felix Fennell](mailto:felnne@bas.ac.uk) [2].

[1] This defines five stages:

* *Discovery* - user requirements gathering
* *Alpha* - prototyping based on user requirements
* *Beta* - refinement of prototype to build a stable project
* *Live* - launch of project, improvements and maintenance
* *Retirement* - either because it will be replaced or discontinued

[2] Please use the information in the *Feedback* section, rather than direct contact.

## Requirements

### Manually through a *local VM*

* Typical project requirements (Vagrant, Ansible, etc.)

## Setup

### Manually through a *local VM*

```shell
$ git clone git@github.com:felnne/schemas-index.git
$ cd schemas-index

$ vagrant up
$ ansible-playbook -i provisioning/development provisioning/site-dev.yml
```

## Usage

TODO: Overview.

TODO: Expected directory structure.

### Manually through a *local VM*

TODO: Instructions.

## Feedback

Please log all feedback to the BAS Web and Applications Team:

* If you are a member of Staff at BAS or NERC please log your feedback in our [Jira project](https://jira.ceh.ac.uk/browse/BASWEB) [1], with the *Research* and *Projects* components selected, to keep things organised.
* Otherwise please email [basweb@bas.ac.uk](mailto:basweb@bas.ac.uk) to log feedback directly.

[1] If you don't have a Jira account please email [basweb@bas.ac.uk](mailto:basweb@bas.ac.uk) to request one. 

## License

Copyright 2015 NERC BAS.

Unless stated otherwise, all documentation is licensed under the Open Government License version 3 and all code licensed under the MIT License.

Copies of all licenses are included in this project's root directory.
