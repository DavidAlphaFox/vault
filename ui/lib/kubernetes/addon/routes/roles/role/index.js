/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class KubernetesRoleRoute extends Route {
  @service router;

  redirect() {
    this.router.transitionTo('vault.cluster.secrets.backend.kubernetes.roles.role.details');
  }
}